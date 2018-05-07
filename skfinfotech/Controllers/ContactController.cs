using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace skfinfotech.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
     
         [HttpGet("[action]")]
        public ActionResult SendUsermail(Email_info ax_Email_info)
        {

            return View();
        }

        public class Email_info
        {
            public string email { get; set; }
            public int phone { get; set; }
            public string comments { get; set; }
        }
           
    }
}



