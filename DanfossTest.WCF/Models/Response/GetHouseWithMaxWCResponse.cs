﻿using DanfossTest.WCF.Models.Internal;
using System.Runtime.Serialization;

namespace DanfossTest.WCF.Models.Response
{
    [DataContract]
    public class GetHouseWithMaxWCResponse : BaseResponse
    {
        [DataMember(Name = "house")]
        public House House { get; set; }
    }
}