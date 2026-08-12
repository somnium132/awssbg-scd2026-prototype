/**
 * AWS Student Community Day: South Summit 2026
 * Pure Data Layer — Speakers Catalog
 * 
 * @typedef {Object} Speaker
 * @property {string} id - Unique identifier (e.g., 'speaker-1')
 * @property {string} name - Full display name of the speaker
 * @property {string} role - Title & affiliation (e.g., 'Solutions Architect · AWS')
 * @property {string} sessionTitle - Title of the presentation or workshop
 * @property {string} abstract - Detailed overview of the talk
 * @property {'CONFIRMED' | 'TBA' | 'KEYNOTE' | 'WORKSHOP'} status - Visual badge style
 * @property {string | null} picUrl - Relative path to headshot (e.g., 'assets/images/speakers/name.png')
 */

/** @type {Speaker[]} */
export const speakers = [
  {
    id: 'speaker-1',
    name: 'Speaker 1',
    role: 'Cloud Engineer · AWS Partner',
    sessionTitle: 'Building Scalable Cloud Applications',
    abstract: 'An introductory deep dive into modern cloud architectures, serverless design patterns, and AWS best practices.',
    status: 'TBA',
    picUrl: null
  },
  {
    id: 'speaker-2',
    name: 'Speaker 2',
    role: 'AI / ML Specialist · Tech Advocate',
    sessionTitle: 'Generative AI on AWS Bedrock',
    abstract: 'Exploring foundation models, prompt engineering, and building generative AI solutions with Amazon Bedrock.',
    status: 'TBA',
    picUrl: null
  },
  {
    id: 'speaker-3',
    name: 'Speaker 3',
    role: 'DevOps Engineer · Community Builder',
    sessionTitle: 'CI/CD Pipelines with AWS CodePipeline',
    abstract: 'Automating software deployments from commit to production with AWS native developer tools.',
    status: 'TBA',
    picUrl: null
  },
  {
    id: 'speaker-4',
    name: 'Speaker 4',
    role: 'Solutions Architect · Cloud Security',
    sessionTitle: 'Zero Trust Security Architecture in AWS',
    abstract: 'Implementing granular IAM policies, VPC security controls, and encryption standards across cloud workloads.',
    status: 'TBA',
    picUrl: null
  },
  {
    id: 'speaker-5',
    name: 'Speaker 5',
    role: 'Student Builder Lead · AWS SBG',
    sessionTitle: 'Student Leadership in Tech Communities',
    abstract: 'Empowering student builder groups to organize events, lead workshops, and grow local developer networks.',
    status: 'TBA',
    picUrl: null
  },
  {
    id: 'speaker-6',
    name: 'Speaker 6',
    role: 'Data Engineer · Analytics Lead',
    sessionTitle: 'Serverless Analytics with Amazon Athena & Glue',
    abstract: 'Querying petabytes of data directly in Amazon S3 using serverless interactive SQL engines.',
    status: 'TBA',
    picUrl: null
  }
];