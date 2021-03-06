import { UserRepository } from "../../interface/database/memory/UserRepositoryImpl";
import { FindById } from '../../application/usecase/FindById';
import { User } from '../../domain/User';

const findByIdExpect = require('./findByIdExpect.json');

describe('auth', ()=> {
  const u = new UserRepository;
  beforeAll(async ()=> {
    const user = new User(1, "sample1", "sample1_firstname", "sample1_lastname", "sample1@example .com");
    const mockTextExec = jest.spyOn(u, 'findById').mockImplementation((param)=> {
      return Promise.resolve(user);
    });
  });

  test('', async ()=> {
    const findbyid = new FindById(u);
    await expect(findbyid.execute(1)).resolves.toEqual(findByIdExpect);
  });
})
