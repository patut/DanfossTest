using System.Runtime.Serialization;

namespace DanfossTest.WCF.Models.Response
{
    [DataContract]
    public class BaseResponse
    {
        [DataMember(Name = "message")]
        public string Message { get; set; }

        [DataMember(Name = "isSuccess")]
        public bool IsSuccess { get; set; }

        public BaseResponse()
        {
            Message = string.Empty;
            IsSuccess = true;
        }

        public BaseResponse(string message)
        {
            Message = message;
            IsSuccess = false;
        }
    }
}