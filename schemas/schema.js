// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import definition from './definition';
import process from './process'
import resource from './resource';
import link from './link';
import result from './result';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'activity',
  types: schemaTypes.concat([
    definition,
    process,
    resource,
    link,
    result,
    {
      title: 'Activity',
      name: 'activity',
      type: 'document',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string', 
        },
        {
          title: 'Category',
          name: 'category',
          type: 'string',
          options: {
            list: [
              {title: 'Consultation', value: 'consultation'},
              {title: 'Education', value: 'education'},
              {title: 'Encouragement', value: 'encouragement'},
              {title: 'Enforcement', value: 'enforcement'},
              {title: 'Engineering', value: 'engineering'},
              {title: 'Evaluation', value: 'evaluation'},
            ]
          }
        },
        {
          title: 'Standard Operating Procedure PDF Link',
          name: 'SOP',
          type: 'string',
        },
        {
          title: 'Tags',
          name: 'tags',
          type: 'array',
          of: [{type: 'string'}]
        },
        {
          title: 'Support Target',
          name: 'supportTarget',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'Students', value: 'students'},
              {title: 'Parents', value: 'parents'},
              {title: 'School', value: 'school'},
              {title: 'Community', value: 'community'},
              
            ],
            layout: 'tags',
          }
        },
        {
          title: 'Description',
          name: 'description',
          type: 'text',
        },
        {
          title: 'Purpose',
          name: 'purpose',
          type: 'text',
        },
        {
          title: 'Definitions',
          name: 'definitions',
          type: 'array',
          of: [{type: 'definition'}]
        },
        {
          title: 'Process',
          name: 'process',
          type: 'array',
          of: [{type: 'process'}]
        },
        {
          title: 'Resources',
          name: 'resources',
          type: 'array',
          of: [{type: 'resource'}]
        },
        {
          title: 'Communications Required',
          name: 'requiredCommunications',
          type: 'array',
          of: [{type: 'string'}]
        },
        {
          title: 'Associated Activities',
          name: 'associatedActivities',
          type: 'array',
          of: [
            {
              type: 'reference', 
              to: [{type: 'activity'}],
            }
          ]
        },
        {
          title: 'Available Equipment',
          name: 'availableEquipment',
          type: 'array',
          of: [{type: 'string'}]
        },
        {
          title: 'Links',
          name: 'links',
          type: 'array',
          of: [{type: 'link'}]
        },
        {
          title: 'Safety and Success Provisions',
          name: 'safetyAndSuccess',
          type: 'array',
          of: [{type: 'string'}]
        },
        {
          title: 'Emergency Procedures',
          name: 'emergencyProcedures',
          type: 'array',
          of: [{type: 'string'}]
        },
        {
          title: 'Expected Results',
          name: 'expectedResults',
          type: 'array',
          of: [{type: 'result'}]
        }
      ]
    },
    {
      title: 'Goal',
      name: 'goal',
      type: 'document',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string'
        },
        {
          title: 'Category',
          name: 'category',
          type: 'string',
          options: {
            list: [
              {title: 'Consultation', value: 'consultation'},
              {title: 'Education', value: 'education'},
              {title: 'Encouragement', value: 'encouragement'},
              {title: 'Enforcement', value: 'enforcement'},
              {title: 'Engineering', value: 'engineering'},
              {title: 'Evaluation', value: 'evaluation'},
            ]
          }
        },
        {
          title: 'Support Target',
          name: 'supportTarget',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'Students', value: 'students'},
              {title: 'Parents', value: 'parents'},
              {title: 'School', value: 'school'},
              {title: 'Community', value: 'community'},
              
            ],
            layout: 'tags',
          }
        },
        {
          title: 'Tags',
          name: 'tags',
          type: 'array',
          of: [{type: 'string'}]
        },
      ]
    },
    {
      title: 'Site Content',
      name: 'content',
      type: 'document',
      fields: [
        {
          title: 'Homepage title',
          name: 'hpTitle',
          type: 'string'
        },
        {
          title: 'Homepage subtitle',
          name: 'hpSubtitle',
          type: 'string'
        },
        {
          title: 'Goal page title',
          name: 'gpTitle',
          type: 'string',
        },
        {
          title: 'Goal page subtitle',
          name: 'gpSubtitle',
          type: 'string',
        },
        {
          title: 'Activity page title',
          name: 'apTitle',
          type: 'string',
        },
        {
          title: 'Activity page subtitle',
          name: 'apSubtitle',
          type: 'string',
        },
        {
          title: 'Plan overview page title',
          name: 'popTitle',
          type: 'string',
        },
        {
          title: 'Plan overview page subtitle',
          name: 'popSubtitle',
          type: 'string',
        },
        {
          title: 'Plan overview page download title',
          name: 'popDownloadTitle',
          type: 'string',
        },
        {
          title: 'Plan overview page download subtitle',
          name: 'popDownloadSubtitle',
          type: 'string',
        },
        {
          title: 'Use Tags when filtering activity?',
          name: 'tagFilter',
          type: 'boolean'
        }
      ],
    }
  ])
})
