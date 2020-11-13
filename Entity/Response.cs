using System;

namespace Entity
{
    public class Response
    {
        public string Titulo { get; set; }
        public string Mensaje { get; set; }
        public object Objeto { get; set; }
        public bool Error { get; set; }

        public Response(string t, string sms, object obj, bool error)
        {
            Titulo = t;
            Mensaje = sms;
            Objeto = obj;
            Error = error;
        }
    }
}