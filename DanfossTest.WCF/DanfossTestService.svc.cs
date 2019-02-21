using DanfossTest.WCF.Helpers;
using DanfossTest.WCF.Models.Request;
using DanfossTest.WCF.Models.Response;
using System.Reflection;

namespace DanfossTest.WCF
{
    public class DanfossTestService : IDanfossTestService
    {
        public GetHousesResponse GetHouses(GetHousesRequest request)
        {
            return ServiceHelper.Process(MethodBase.GetCurrentMethod().Name, () => new DatabaseHelper().GetHouses(request));
        }

        public GetHouseWithMaxWCResponse GetHouseWithMaxWC(GetHouseWithMaxWCRequest request)
        {
            return ServiceHelper.Process(MethodBase.GetCurrentMethod().Name, () => new DatabaseHelper().GetHouseWithMaxWC(request));
        }

        public GetHouseWithMinWCResponse GetHouseWithMinWC(GetHouseWithMinWCRequest request)
        {
            return ServiceHelper.Process(MethodBase.GetCurrentMethod().Name, () => new DatabaseHelper().GetHouseWithMinWC(request));
        }
    }
}
