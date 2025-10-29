import Disease from "../models/diseaseModel.js";
import { Parser } from "json2csv"; // for exporting CSV (install json2csv)

export const listDiseases = async (req, res) => {
  try {
    // simple filter / search via query params
    const q = req.query.q || "";
    const filter = (() => {
      if (!q) return {};
      const or = [
        // new schema fields
        { name: { $regex: q, $options: "i" } },
        { code: { $regex: q, $options: "i" } },
        { icd_tm2: { $regex: q, $options: "i" } },
        { ayush_system: { $regex: q, $options: "i" } },
        // legacy schema fields
        { TermName: { $regex: q, $options: "i" } },
        { NamasteCode: { $regex: q, $options: "i" } },
        { PrimaryBiomedicalCode: { $regex: q, $options: "i" } },
        { System: { $regex: q, $options: "i" } }
      ];

      // numeric matches for numeric fields
      if (!isNaN(q)) {
        or.push({ icd_biomed: Number(q) });
        or.push({ FoundationID: Number(q) });
      }

      return { $or: or };
    })();

    const diseases = await Disease.find(filter).limit(500);
    res.json(diseases);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getDisease = async (req, res) => {
  try {
    const d = await Disease.findById(req.params.id);
    if (!d) return res.status(404).json({ message: "Not found" });
    res.json(d);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createDisease = async (req, res) => {
  try {
    const doc = new Disease(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ message: "Bad request", error: err.message });
  }
};

export const updateDisease = async (req, res) => {
  try {
    const updated = await Disease.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err.message });
  }
};

export const deleteDisease = async (req, res) => {
  try {
    await Disease.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};

export const exportCsv = async (req, res) => {
  try {
    const diseases = await Disease.find({}).limit(5000).lean();
    // include both legacy and new field names so CSV contains whichever exists
    const fields = [
      "NamasteCode",
      "TermName",
      "System",
      "FoundationID",
      "PrimaryBiomedicalCode",
      "Notes",
      "code",
      "name",
      "definition",
      "icd_tm2",
      "icd_biomed",
      "ayush_system"
    ];
    const parser = new Parser({ fields });
    const csv = parser.parse(diseases);
    res.header("Content-Type", "text/csv");
    res.attachment("diseases_export.csv");
    res.send(csv);
  } catch (err) {
    res.status(500).json({ message: "Export failed", error: err.message });
  }
};
