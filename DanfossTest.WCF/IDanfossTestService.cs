using DanfossTest.WCF.Models.Response;
using DanfossTest.WCF.Models.Request;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.IO;
using System.Threading.Tasks;

namespace DanfossTest.WCF
{
    [ServiceContract]
    public interface IDanfossTestService
    {
        /// <summary>
        /// Get list of all houses
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        GetHousesResponse GetHouses(GetHousesRequest request);

        /// <summary>
        /// Get house with maximum water consumption
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        GetHouseWithMaxWCResponse GetHouseWithMaxWC(GetHouseWithMaxWCRequest request);

        /// <summary>
        /// Get house with minimum water consumption
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        GetHouseWithMinWCResponse GetHouseWithMinWC(GetHouseWithMinWCRequest request);
    }
}
