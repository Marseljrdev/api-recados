import { User } from "../models/user.models";
import { recados } from "./recados.database";

export const users = [
    new User('Marsel', '748.524.154-84', 'marsel@gmail.com', "as123", recados),
    new User('Flavio', '526.841.325-95', 'flavio@gmail.com', "dasd123", recados),
    new User('Abreu', '296.748.290-70', 'abreu@gmail.com', "try4343", recados),
    new User('Brandao', '761.151.496-60', 'brandao@gmail.com', "po9897", recados),
    new User('Junior', '601.859.417-75', 'junior@gmail.com', "iu789", recados),
]