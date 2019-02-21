using DanfossTest.WCF.Models.ModelConverters;
using DanfossTest.WCF.Models.Request;
using DanfossTest.WCF.Models.Response;
using System.Linq;

namespace DanfossTest.WCF.Helpers
{
    public class DatabaseHelper
    {
        private App_Data.DanfossTestDatabaseEntities GetContext()
        {
            return new App_Data.DanfossTestDatabaseEntities();
        }

        /// <summary>
        /// Get all list of all houses
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public GetHousesResponse GetHouses(GetHousesRequest request)
        {
            using (var context = GetContext())
            {
                var houses = context.House
                    .ToList()
                    .Select(h => HouseConverter.ConvertHouse(h))
                    .ToList();

                return new GetHousesResponse()
                {
                    HouseList = houses 
                };
            }
        }

        /// <summary>
        /// Get House with minimum water value
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public GetHouseWithMinWCResponse GetHouseWithMinWC(GetHouseWithMinWCRequest request)
        {
            using (var context = GetContext())
            {
                var house = context.House
                    .OrderBy(h => h.WaterCounter.WaterValues)
                    .FirstOrDefault();

                return new GetHouseWithMinWCResponse()
                {
                    House = HouseConverter.ConvertHouse(house)
                };
            }
        }

        /// <summary>
        /// Get house with maximum water value
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public GetHouseWithMaxWCResponse GetHouseWithMaxWC(GetHouseWithMaxWCRequest request)
        {
            using (var context = GetContext())
            {
                var house = context.House
                    .OrderByDescending(h => h.WaterCounter.WaterValues)
                    .FirstOrDefault();

                return new GetHouseWithMaxWCResponse()
                {
                    House = HouseConverter.ConvertHouse(house)
                };
            }
        }
    }
}