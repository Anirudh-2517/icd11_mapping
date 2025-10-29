import mongoose from 'mongoose';
import ICD from '../models/icdModel.js';
import Knowledge from '../models/knowledgeModel.js';

const MONGO = 'mongodb://localhost:27017/namaste-db';

const icdSamples = [
  { icdCode: 'R11', diseaseName: 'Nausea', description: 'Feeling of sickness in stomach' },
  { icdCode: '7H90', diseaseName: 'Arbudaḥ (Tumour Disorder)', description: 'Associated with imbalance of doshas.' }
];

const knowledgeSamples = [
  { title: 'Namaste Terminology', summary: 'Overview of Namaste India terminologies and coding.', link: 'https://example.org/namaste' },
  { title: 'ICD Mapping Guide', summary: 'How to map traditional codes to ICD.', link: 'https://example.org/icd-mapping' }
];

async function seed() {
  try {
    await mongoose.connect(MONGO);
    console.log('Connected to Mongo');

    await ICD.deleteMany({});
    await Knowledge.deleteMany({});

    await ICD.insertMany(icdSamples);
    await Knowledge.insertMany(knowledgeSamples);

    console.log('Seeded ICD and Knowledge data');
  } catch (err) {
    console.error('Seed error', err);
  } finally {
    mongoose.disconnect();
  }
}

seed();
