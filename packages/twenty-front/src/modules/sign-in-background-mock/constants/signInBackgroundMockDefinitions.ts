import { FilterDefinition } from '@/object-record/object-filter-dropdown/types/FilterDefinition';
import { SortDefinition } from '@/object-record/object-sort-dropdown/types/SortDefinition';
import { ColumnDefinition } from '@/object-record/record-table/types/ColumnDefinition';

export const signInBackgroundMockColumnDefinitions = [
  {
    position: 0,
    fieldMetadataId: '20202020-5e4e-4007-a630-8a2617914889',
    label: 'Domain Name',
    size: 100,
    type: 'TEXT',
    metadata: {
      fieldName: 'domainName',
      placeHolder: 'Domain Name',
      relationObjectMetadataNameSingular: '',
      relationObjectMetadataNamePlural: '',
      objectMetadataNameSingular: 'company',
    },
    iconName: 'IconLink',
    isVisible: true,
  },
  {
    position: 1,
    fieldMetadataId: '20202020-7fbd-41ad-b64d-25a15ff62f04',
    label: 'Employees',
    size: 100,
    type: 'NUMBER',
    metadata: {
      fieldName: 'employees',
      placeHolder: 'Employees',
      relationObjectMetadataNameSingular: '',
      relationObjectMetadataNamePlural: '',
      objectMetadataNameSingular: 'company',
    },
    iconName: 'IconUsers',
    isVisible: true,
  },
  {
    position: 2,
    fieldMetadataId: '20202020-6d30-4111-9f40-b4301906fd3c',
    label: 'Name',
    size: 100,
    type: 'TEXT',
    metadata: {
      fieldName: 'name',
      placeHolder: 'Name',
      relationObjectMetadataNameSingular: '',
      relationObjectMetadataNamePlural: '',
      objectMetadataNameSingular: 'company',
    },
    iconName: 'IconBuildingSkyscraper',
    isVisible: true,
  },
  {
    position: 3,
    fieldMetadataId: '20202020-e7c8-4771-8cc4-ce0e8c36a3c0',
    label: 'Favorites',
    size: 100,
    type: 'RELATION',
    metadata: {
      fieldName: 'favorites',
      placeHolder: 'Favorites',
      relationType: 'FROM_MANY_OBJECTS',
      relationObjectMetadataNameSingular: '',
      relationObjectMetadataNamePlural: '',
      objectMetadataNameSingular: 'company',
    },
    iconName: 'IconHeart',
    isVisible: true,
  },
  {
    position: 4,
    fieldMetadataId: '20202020-ad10-4117-a039-3f04b7a5f939',
    label: 'Address',
    size: 100,
    type: 'TEXT',
    metadata: {
      fieldName: 'address',
      placeHolder: 'Address',
      relationObjectMetadataNameSingular: '',
      relationObjectMetadataNamePlural: '',
      objectMetadataNameSingular: 'company',
    },
    iconName: 'IconMap',
    isVisible: true,
  },
  {
    position: 5,
    fieldMetadataId: '20202020-0739-495d-8e70-c0807f6b2268',
    label: 'Account Owner',
    size: 100,
    type: 'RELATION',
    metadata: {
      fieldName: 'accountOwner',
      placeHolder: 'Account Owner',
      relationType: 'TO_ONE_OBJECT',
      relationObjectMetadataNameSingular: 'workspaceMember',
      relationObjectMetadataNamePlural: 'workspaceMembers',
      objectMetadataNameSingular: 'company',
    },
    iconName: 'IconUserCircle',
    isVisible: true,
  },
  {
    position: 6,
    fieldMetadataId: '20202020-68b4-4c8e-af19-738eba2a42a5',
    label: 'People',
    size: 100,
    type: 'RELATION',
    metadata: {
      fieldName: 'people',
      placeHolder: 'People',
      relationType: 'FROM_MANY_OBJECTS',
      relationObjectMetadataNameSingular: '',
      relationObjectMetadataNamePlural: '',
      objectMetadataNameSingular: 'company',
    },
    iconName: 'IconUsers',
    isVisible: true,
  },
  {
    position: 7,
    fieldMetadataId: '20202020-61af-4ffd-b79b-baed6db8ad11',
    label: 'Attachments',
    size: 100,
    type: 'RELATION',
    metadata: {
      fieldName: 'attachments',
      placeHolder: 'Attachments',
      relationType: 'FROM_MANY_OBJECTS',
      relationObjectMetadataNameSingular: '',
      relationObjectMetadataNamePlural: '',
      objectMetadataNameSingular: 'company',
    },
    iconName: 'IconFileImport',
    isVisible: true,
  },
  {
    position: 8,
    fieldMetadataId: '20202020-4dc2-47c9-bb15-6e6f19ba9e46',
    label: 'Creation date',
    size: 100,
    type: 'DATE_TIME',
    metadata: {
      fieldName: 'createdAt',
      placeHolder: 'Creation date',
      relationObjectMetadataNameSingular: '',
      relationObjectMetadataNamePlural: '',
      objectMetadataNameSingular: 'company',
    },
    iconName: 'IconCalendar',
    isVisible: true,
  },
  {
    position: 9,
    fieldMetadataId: '20202020-9e9f-4235-98b2-c76f3e2d281e',
    label: 'ICP',
    size: 100,
    type: 'BOOLEAN',
    metadata: {
      fieldName: 'idealCustomerProfile',
      placeHolder: 'ICP',
      relationObjectMetadataNameSingular: '',
      relationObjectMetadataNamePlural: '',
      objectMetadataNameSingular: 'company',
    },
    iconName: 'IconTarget',
    isVisible: true,
  },
  {
    position: 10,
    fieldMetadataId: '20202020-a61d-4b78-b998-3fd88b4f73a1',
    label: 'Linkedin',
    size: 100,
    type: 'LINK',
    metadata: {
      fieldName: 'linkedinLink',
      placeHolder: 'Linkedin',
      relationObjectMetadataNameSingular: '',
      relationObjectMetadataNamePlural: '',
      objectMetadataNameSingular: 'company',
    },
    iconName: 'IconBrandLinkedin',
    isVisible: true,
  },
  {
    position: 11,
    fieldMetadataId: '20202020-e3fc-46ff-b552-3e757843f06e',
    label: 'Opportunities',
    size: 100,
    type: 'RELATION',
    metadata: {
      fieldName: 'opportunities',
      placeHolder: 'Opportunities',
      relationType: 'FROM_MANY_OBJECTS',
      relationObjectMetadataNameSingular: '',
      relationObjectMetadataNamePlural: '',
      objectMetadataNameSingular: 'company',
    },
    iconName: 'IconTargetArrow',
    isVisible: true,
  },
  {
    position: 12,
    fieldMetadataId: '20202020-46e3-479a-b8f4-77137c74daa6',
    label: 'X',
    size: 100,
    type: 'LINK',
    metadata: {
      fieldName: 'xLink',
      placeHolder: 'X',
      relationObjectMetadataNameSingular: '',
      relationObjectMetadataNamePlural: '',
      objectMetadataNameSingular: 'company',
    },
    iconName: 'IconBrandX',
    isVisible: true,
  },
  {
    position: 13,
    fieldMetadataId: '20202020-4a2e-4b41-8562-279963e8947e',
    label: 'Activities',
    size: 100,
    type: 'RELATION',
    metadata: {
      fieldName: 'activityTargets',
      placeHolder: 'Activities',
      relationType: 'FROM_MANY_OBJECTS',
      relationObjectMetadataNameSingular: '',
      relationObjectMetadataNamePlural: '',
      objectMetadataNameSingular: 'company',
    },
    iconName: 'IconCheckbox',
    isVisible: true,
  },
  {
    position: 14,
    fieldMetadataId: '20202020-4a5a-466f-92d9-c3870d9502a9',
    label: 'ARR',
    size: 100,
    type: 'CURRENCY',
    metadata: {
      fieldName: 'annualRecurringRevenue',
      placeHolder: 'ARR',
      relationObjectMetadataNameSingular: '',
      relationObjectMetadataNamePlural: '',
      objectMetadataNameSingular: 'company',
    },
    iconName: 'IconMoneybag',
    isVisible: true,
  },
] as ColumnDefinition<any>[];

export const signInBackgroundMockFilterDefinitions = [
  {
    fieldMetadataId: '20202020-5e4e-4007-a630-8a2617914889',
    label: 'Domain Name',
    iconName: 'IconLink',
    type: 'TEXT',
  },
  {
    fieldMetadataId: '20202020-7fbd-41ad-b64d-25a15ff62f04',
    label: 'Employees',
    iconName: 'IconUsers',
    type: 'NUMBER',
  },
  {
    fieldMetadataId: '20202020-6d30-4111-9f40-b4301906fd3c',
    label: 'Name',
    iconName: 'IconBuildingSkyscraper',
    type: 'TEXT',
  },
  {
    fieldMetadataId: '20202020-ad10-4117-a039-3f04b7a5f939',
    label: 'Address',
    iconName: 'IconMap',
    type: 'TEXT',
  },
  {
    fieldMetadataId: '20202020-0739-495d-8e70-c0807f6b2268',
    label: 'Account Owner',
    iconName: 'IconUserCircle',
    relationObjectMetadataNamePlural: 'workspaceMembers',
    relationObjectMetadataNameSingular: 'workspaceMember',
    type: 'RELATION',
  },
  {
    fieldMetadataId: '20202020-4dc2-47c9-bb15-6e6f19ba9e46',
    label: 'Creation date',
    iconName: 'IconCalendar',
    type: 'DATE_TIME',
  },
  {
    fieldMetadataId: '20202020-a61d-4b78-b998-3fd88b4f73a1',
    label: 'Linkedin',
    iconName: 'IconBrandLinkedin',
    type: 'LINK',
  },
  {
    fieldMetadataId: '20202020-46e3-479a-b8f4-77137c74daa6',
    label: 'X',
    iconName: 'IconBrandX',
    type: 'LINK',
  },
  {
    fieldMetadataId: '20202020-4a5a-466f-92d9-c3870d9502a9',
    label: 'ARR',
    iconName: 'IconMoneybag',
    type: 'CURRENCY',
  },
] as FilterDefinition[];

export const signInBackgroundMockSortDefinitions = [
  {
    fieldMetadataId: '20202020-5e4e-4007-a630-8a2617914889',
    label: 'Domain Name',
    iconName: 'IconLink',
  },
  {
    fieldMetadataId: '20202020-7fbd-41ad-b64d-25a15ff62f04',
    label: 'Employees',
    iconName: 'IconUsers',
  },
  {
    fieldMetadataId: '20202020-6d30-4111-9f40-b4301906fd3c',
    label: 'Name',
    iconName: 'IconBuildingSkyscraper',
  },
  {
    fieldMetadataId: '20202020-ad10-4117-a039-3f04b7a5f939',
    label: 'Address',
    iconName: 'IconMap',
  },
  {
    fieldMetadataId: '20202020-4dc2-47c9-bb15-6e6f19ba9e46',
    label: 'Creation date',
    iconName: 'IconCalendar',
  },
  {
    fieldMetadataId: '20202020-9e9f-4235-98b2-c76f3e2d281e',
    label: 'ICP',
    iconName: 'IconTarget',
  },
] as SortDefinition[];