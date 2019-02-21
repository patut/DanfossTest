using DanfossTest.WCF.Models.Response;
using Newtonsoft.Json;
using System;
using System.Threading.Tasks;

namespace DanfossTest.WCF.Helpers
{
    public class ServiceHelper
    {
        public static Response Process<Request, Response>(Request request, string methodName, Func<Response> operation, string requestParams = null)
            where Response : BaseResponse, new()
        {
            if (string.IsNullOrEmpty(requestParams))
                requestParams = JsonConvert.SerializeObject(request);

            try
            {
                Log.GetLogger().Debug($"Запущен метод {methodName}({requestParams})");
                return operation();
            }
            catch (ApplicationException ex)
            {
                Log.GetLogger().Error($"Произошла ошибка в {methodName} ({requestParams})", ex);
                return new Response()
                {
                    Message = ex.Message,
                    IsSuccess = false
                };
            }
            catch (Exception ex)
            {
                Log.GetLogger().Error($"Произошла непредвиденная ошибка в {methodName} ({requestParams})", ex);
                return new Response()
                {
                    Message = ex.Message,
                    IsSuccess = false
                };
            }
        }

        public static Response Process<Response>(string methodName, Func<Response> operation)
            where Response : BaseResponse, new()
        {
            try
            {
                Log.GetLogger().Debug($"Запущен метод {methodName}");
                return operation();
            }
            catch (ApplicationException ex)
            {
                Log.GetLogger().Error($"Произошла ошибка в {methodName}", ex);
                return new Response()
                {
                    Message = ex.Message,
                    IsSuccess = false
                };
            }
            catch (Exception ex)
            {
                Log.GetLogger().Error($"Произошла непредвиденная ошибка в {methodName}", ex);
                return new Response()
                {
                    Message = $"{ex.Message} {ex.InnerException?.Message ?? string.Empty}",
                    IsSuccess = false
                };
            }
        }
    }
}