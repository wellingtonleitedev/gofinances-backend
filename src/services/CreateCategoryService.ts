import { getRepository } from 'typeorm';
import Audit from '../models/Audit';
import Category from '../models/Category';

class CreateCategoryService {
  public async execute(title: string): Promise<Category> {
    const categoryRepository = getRepository(Category);
    const auditRepository = getRepository(Audit);

    const findCategory = await categoryRepository.findOne({
      where: { title },
    });

    if (findCategory) {
      return findCategory;
    }

    const category = categoryRepository.create({ title });

    const changes = {
      ...category,
      _status: 'created',
    };

    const audit = auditRepository.create({
      table: 'categories',
      changes: JSON.stringify(changes),
    });

    await categoryRepository.save(category);
    await auditRepository.save(audit);

    return category;
  }
}

export default CreateCategoryService;
