using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class ProductSalesController : Controller
    {
        [HttpGet]
        [Route("ForSku/{sku}")]
        public JsonResult ForSku(string sku)
        {
            return Json("Sales for SKU: " + sku);
        }
    }
}
