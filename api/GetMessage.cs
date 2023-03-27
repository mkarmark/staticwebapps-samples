using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Azure.Identity;

namespace StaticWebAppsEndToEndTesting.GetMessage
{
    public static class GetMessage
    {
        [FunctionName("Function1")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
             ILogger log)
        {

            log.LogInformation("C# HTTP trigger function processed a request.");

            ManagedIdentityCredential myCredentials = new ManagedIdentityCredential();

            log.LogInformation("**1**");

            var myBlobUrl = "https://mikarmarswahobosa.blob.core.windows.net/cont26a/output.txt";
            BlobClient bc = new BlobClient(new Uri(myBlobUrl), myCredentials);

            log.LogInformation("**2**");

            BlobDownloadResult downloadResult = await bc.DownloadContentAsync();
            string downloadedData = downloadResult.Content.ToString();

            log.LogInformation("**3**");

            return new OkObjectResult("Output text from file in the cloud: " + downloadedData);
        }
    }
}
