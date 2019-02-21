using DanfossTest.WCF.Models.Internal;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace DanfossTest.WCF.Models.Response
{
    [DataContract]
    public class GetHousesResponse : BaseResponse
    {
        [DataMember(Name = "houseList")]
        public List<House> HouseList { get; set; }
    }
}