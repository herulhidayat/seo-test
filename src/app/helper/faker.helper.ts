import { faker } from '@faker-js/faker';
import moment from 'moment';

export const platform = ['facebook', 'instagram', 'twitter'];
export const statusUser = ['active', 'inactive'];
const unit = ['minute', 'hour', 'day', 'week'];
const level = ['Eazy', 'Moderate', 'Hard', 'Extreme', 'Insane'];
const taskType = [
  'Development',
  'Research',
  'Bugs',
  'Maintenance',
  'Desain',
  'Slicing',
];

export const generateDummyData = (type: string, numberOfData: number = 5) => {
  const name = faker.name.findName();

  return Array.from(Array(numberOfData).keys()).map(() => {
    switch (type) {
      case 'taskType':
        return {
          id: faker.datatype.uuid(),
          name: taskType[Math.floor(Math.random() * taskType.length)],
          createdAt: moment(faker.datatype.datetime()).toISOString(),
          updatedAt: moment(faker.datatype.datetime()).toISOString(),
        };
      case 'workHour':
        return {
          title: faker.lorem.sentences(1),
          avatar: faker.internet.avatar(),
          work_hour: `${faker.datatype.number(2)} Hours`,
          startAt: moment(faker.datatype.datetime()).toISOString(),
          stopAt: moment(faker.datatype.datetime()).toISOString(),
          overtime: `${faker.datatype.number(2)} Hours`,
          priority: 'low',
          status: 'CLOSED'
        };
      case 'division':
      case 'role':
        return {
          id: faker.datatype.uuid(),
          name: faker.lorem.words(2),
          description: faker.lorem.sentences(1),
          createdAt: moment(faker.datatype.datetime()).toISOString(),
          updatedAt: moment(faker.datatype.datetime()).toISOString(),
        };
      case 'teams':
        return {
          fullname: faker.name.findName(),
          avatar: faker.internet.avatar(),
        };
      case 'workspace':
        return {
          id: faker.datatype.uuid(),
          name: faker.name.findName(),
          description: faker.lorem.sentences(1),
          pic: faker.internet.avatar(),
          image: faker.internet.avatar(),
          teams: [0, 1, 2, 3, 4, 5, 6].map(() => ({
            fullname: faker.name.findName(),
            avatar: faker.internet.avatar(),
          })),
          createdAt: moment(faker.datatype.datetime()).toISOString(),
          updatedAt: moment(faker.datatype.datetime()).toISOString(),
        };
      case 'priority':
        return {
          id: faker.datatype.uuid(),
          name: faker.lorem.words(2),
          level: faker.datatype.number(2),
          createdAt: moment(faker.datatype.datetime()).toISOString(),
          updatedAt: moment(faker.datatype.datetime()).toISOString(),
        };
      case 'difficultyLevel':
        return {
          id: faker.datatype.uuid(),
          name: level[Math.floor(Math.random() * level.length)],
          level: faker.datatype.number(1),
          maxTime: faker.datatype.number(1),
          unit: unit[Math.floor(Math.random() * unit.length)],
          createdAt: moment(faker.datatype.datetime()).toISOString(),
          updatedAt: moment(faker.datatype.datetime()).toISOString(),
        };
      case 'user':
        return {
          id: faker.datatype.uuid(),
          divisionId: faker.datatype.uuid(),
          roleId: faker.datatype.uuid(),
          username: faker.internet.userName(name),
          password: 'secret',
          fullname: faker.name.findName(),
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          telegram: '@' + faker.internet.userName(),
          about: '',
          avatar: faker.internet.avatar(),
          status: statusUser[Math.floor(Math.random() * statusUser.length)],
          createdAt: moment(faker.datatype.datetime()).toISOString(),
          updatedAt: moment(faker.datatype.datetime()).toISOString(),
        };
      default:
        break;
    }
  });
};
