import { Category } from "../../entities/categories";
import { ICategoriesRepository } from "../../Repositories/ICategoriesRepository";


class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){
    }   

    execute(): Category[]{   

        const categories = this.categoriesRepository.list();
        return categories;

    }

}

export{ListCategoriesUseCase}