import { Project } from './Project';

export const MOCK_PROJECTS = [
  new Project({
    id: 1,
    name: 'John - Genesis',
    description:
      'Configured Svlte project',
    imageUrl: '/assets/placeimg_500_300_arch4.jpg',
    contractTypeId: 3,
    contractSignedOn: '2020-08-04T22:39:41.473Z',
    budget: 5000,
    isActive: false,
  }),
  new Project({
    id: 2,
    name: 'Django Group',
    description:
      'Centralized Django Models',
    imageUrl: '/assets/placeimg_500_300_arch1.jpg',
    contractTypeId: 4,
    contractSignedOn: '2020-08-06T21:21:31.419Z',
    budget: 91638,
    isActive: true,
  }),
  new Project({
    id: 3,
    name: 'React Login',
    description:
      'Jwt auth',
    imageUrl: '/assets/placeimg_500_300_arch12.jpg',
    contractTypeId: 6,
    contractSignedOn: '2021-06-26T18:24:01.706Z',
    budget: 29729,
    isActive: true,
  }),
  new Project({
    id: 4,
    name: 'Typescript',
    description:
      'Javasript with Types',
    imageUrl: '/assets/placeimg_500_300_arch5.jpg',
    contractTypeId: 4,
    contractSignedOn: '2021-05-26T01:10:42.344Z',
    budget: 45660,
    isActive: true,
  }),
  new Project({
    id: 5,
    name: 'Gatsby',
    description:
      'Managed logistical migration.',
    imageUrl: '/assets/placeimg_500_300_arch12.jpg',
    contractTypeId: 2,
    contractSignedOn: '2021-12-18T21:46:47.944Z',
    budget: 81188,
    isActive: true,
  }),
  new Project({
    id: 6,
    name: 'Tailwind',
    description:
    'scanning all of your HTML files, JavaScript components, and any other templates for class names,generating the corresponding styles and then writing them to a static CSS file.',
    contractTypeId: 3,
    contractSignedOn: '2016-09-23T21:27:25.035Z',
    budget: 53407,
    isActive: false,
  }),
];