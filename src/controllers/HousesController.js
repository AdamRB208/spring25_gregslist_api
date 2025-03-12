import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";


export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getHouses)
      .get('/year', this.getHouseByQuery)
      .get('/:houseId', this.getHouseById)


    // .get('/test/test', this.getTestStuff)
    // example

  }

  /**
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */

  async getHouses(request, response, next) {
    try {
      const houses = await housesService.getHouses()
      response.send(houses)
    } catch (error) {
      next(error)
    }
  }

  /**
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */

  async getHouseById(request, response, next) {
    try {
      const houseId = request.params.houseId
      const house = await housesService.getHouseById(houseId)
      response.send(house)
    } catch (error) {
      next(error)
    }
  }

  /**
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */


  async getHouseByQuery(request, response, next) {
    try {
      const house = await housesService.getHouseByQuery()
      response.send(house)
      console.log('this is running')
    } catch (error) {
      next(error)
    }
  }


  // example
  // async getTestStuff(request, response, next) {
  //   try {
  //     console.log('the test is running')
  //     response.send('It is testing')

  //   } catch (error) {
  //     next(error)
  //   }
  // }

}