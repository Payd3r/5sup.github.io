using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Monefy
{
    public class Movimento
    {
        public bool tipo { get; set; }
        public int importo { get; set; }
        public string nota { get; set; }
        public string categoria { get; set; }
        public string percorso { get; set; }
        public DateTime orario { get; set; }
        public Movimento()
        {
            tipo = false; //false = negativo | true = positivo
            importo = 0;
            nota = "";
            categoria = "";
            percorso = "";
            orario = new DateTime();
        }
        public string toString()
        {
            string s = "";
            if (!tipo)
                s += "-;";
            else
                s += "+;";
            return s + importo + ";" + nota + ";" + categoria + ";" + percorso + ";" + orario.ToString();
        }
        public void fromCSV(string riga)
        {
            string[] tmp = riga.Split(';');
            if (tmp[0] == "+")
                this.tipo = true;
            this.importo = Convert.ToInt32(tmp[1]);
            this.nota = tmp[2];
            this.categoria = tmp[3];
            this.percorso = tmp[4];
            this.orario = Convert.ToDateTime(tmp[5]);
        }
    }
}
