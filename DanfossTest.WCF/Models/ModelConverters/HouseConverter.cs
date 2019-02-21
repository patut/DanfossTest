using RestModel = DanfossTest.WCF.Models.Internal;
using DatabaseModel = DanfossTest.WCF.App_Data;

namespace DanfossTest.WCF.Models.ModelConverters
{
    public static class HouseConverter
    {
        public static RestModel.House ConvertHouse(DatabaseModel.House house)
        {
            return new RestModel.House()
            {
                Address = house.Address,
                WaterValues = house.WaterCounter.WaterValues,
                Id = house.HouseId
            };
        }
    }
}