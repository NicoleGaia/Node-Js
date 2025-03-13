import * as database from "./utils/database.js";
// import { connectToDataBase, desconnectDataBase} from "./utils/database.js";
// import connectToDataBase from "./utils/database.js";
import {getDataFromApi} from "./utils/api.js"

getDataFromApi()
database.connectToDataBase("My-database");
database.desconnectDataBase();
console.log(database.databaseType)