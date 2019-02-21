using System;
using System.Runtime.Serialization;

namespace DanfossTest.WCF.Models.Internal
{
    [DataContract]
    public class House
    {
        [DataMember(Name = "id")]
        public Guid? Id { get; set; }

        [DataMember(Name = "address")]
        public string Address { get; set; }

        [DataMember(Name = "waterValues")]
        public decimal WaterValues { get; set; }
    }
}