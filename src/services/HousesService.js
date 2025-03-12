import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js";


class HousesService {
  async getHouses() {
    const houses = await dbContext.Houses.find().populate('creator')
    return houses
  }

  async getHouseById(houseId) {
    const house = await (await dbContext.Houses.findById(houseId)).populated('creator')
    // console.log('found house', house);
    if (house == null) {
      throw new BadRequest(`${houseId} is not a valid house id!`)
    }
    return house
  }

}

export const housesService = new HousesService()