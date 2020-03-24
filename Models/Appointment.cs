using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace meeting.Models
{
    public class Appointment
    {
        public int AppointmentId { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string Reason { get; set; }
        public string DetailReason { get; set; }
        public DateTimeOffset AppointmentDateTime { get; set; }
        public bool IsApproved { get; set; }
        public string Status { get; set; }
        public DateTimeOffset CreateDate { get; set; }
        public DateTimeOffset UpdateDate { get; set; }
        public DateTimeOffset DeleteDate { get; set; }
    }
}
