import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { formatISO } from 'date-fns';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find a valid user', async () => {
    // To test an observable - use firstValueFrom to turn it into a promise and then use expect(resolves.toBe()) to process the result asynchronously
    const bob = await service.findUser('bob');

    expect(bob).toEqual({
      username: 'bob',
      passwordHash: bob?.passwordHash, // because the hash is not repeatable
      firstName: 'Bob',
      lastName: 'Smith',
      birthDate: formatISO(new Date(1973, 6, 21), { representation: 'date' }),
      address: '16 Julian Street\nRedwoodtown\nBlenheim 7201',
      email: 'bob@here.com',
      phoneNumber: '03 578 1234',
    });
  });

  it('should not find an invalid user', async () => {
    return expect(service.findUser('invalid')).resolves.toEqual(undefined);
  });
});
