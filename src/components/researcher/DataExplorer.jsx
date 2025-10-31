import React from "react";
import { ExternalLink } from "lucide-react";

const DataExplorer = () => {
  // 🌍 Curated dataset links related to ICD, AYUSH & healthcare research
  const featuredDatasets = [
    {
      title: "ICD-11 Dataset by WHO",
      link: "https://icd.who.int/en",
      description:
        "Official WHO ICD-11 browser with downloadable datasets and disease classification data.",
    },
    {
      title: "ICD-10/ICD-11 Mapping Dataset (Kaggle)",
      link: "https://www.kaggle.com/datasets/redwankarimsony/heart-disease-data",
      description:
        "Kaggle dataset linking disease conditions and ICD codes for AI and ML research.",
    },
    {
      title: "AYUSH Terminology Dataset (India)",
      link: "https://data.gov.in/catalog/ayush-terminology",
      description:
        "Dataset of standardized AYUSH terminologies used in traditional systems of medicine.",
    },
    {
      title: "NAMASTE-India Mapping Dataset",
      link: "https://data.gov.in/resources",
      description:
        "Government of India open data repository including AYUSH–ICD mappings and healthcare statistics.",
    },
    {
      title: "WHO Global Health Observatory Data Repository",
      link: "https://www.who.int/data/gho",
      description:
        "Access to global health indicators, ICD-based disease statistics, and mortality data.",
    },
    {
      title: "National Health Portal (India) Datasets",
      link: "https://www.nhp.gov.in/",
      description:
        "Information and open datasets about diseases, treatments, and AYUSH systems in India.",
    },
    {
      title: "NIH Open Biomedical Datasets",
      link: "https://www.nih.gov/",
      description:
        "U.S. National Institutes of Health datasets for disease prediction and classification.",
    },
    {
      title: "PubMed & BioMed ICD-linked Research Data",
      link: "https://pubmed.ncbi.nlm.nih.gov/",
      description:
        "Biomedical and clinical research datasets tagged with ICD and disease identifiers.",
    },
    {
      title: "AI in Healthcare Datasets (Kaggle Collection)",
      link: "https://www.kaggle.com/collections/healthcare",
      description:
        "Curated Kaggle collection of AI-based healthcare and diagnosis datasets for model training.",
    },
    {
      title: "India Tuberculosis Report Dataset",
      link: "https://www.data.gov.in/catalog/india-tuberculosis-report-2023",
      description:
        "National-level tuberculosis and infectious disease dataset published by the Ministry of Health.",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-emerald-700">
        Data Explorer
      </h2>

      {/* 🌐 Featured External Datasets */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-emerald-600">
          Featured Medical & Research Datasets
        </h3>

        <ul className="space-y-4">
          {featuredDatasets.map((dataset, index) => (
            <li
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:bg-emerald-50 transition-all"
            >
              <a
                href={dataset.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-emerald-700 font-medium hover:text-emerald-900"
              >
                {dataset.title}
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
              <p className="text-gray-600 text-sm mt-1">
                {dataset.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataExplorer;
