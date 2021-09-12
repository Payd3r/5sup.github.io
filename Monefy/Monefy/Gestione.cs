using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Monefy
{
    public class Gestione
    {
        private string nomeFile;
        public Gestione(string nomeFile) => this.nomeFile = nomeFile;
        public void scriviTutto(string stringa) => File.WriteAllText(nomeFile, stringa);
        public string leggiTutto() { return File.ReadAllText(nomeFile); }

        public Movimenti leggi()
        {
            Movimenti lista = new Movimenti();
            using (StreamReader sr = File.OpenText(nomeFile))
            {
                string s = "";
                while ((s = sr.ReadLine()) != null)
                {
                    Movimento temp = new Movimento();
                    temp.fromCSV(s);
                    lista.setMovimento(temp);
                }
            }
            return lista;
        }
        public void aggiungi(Movimenti lista)
        {
            string temp = "";
            for (int i = 0; i < lista.nEl(); i++)
                temp += lista.getMovimento(i).toString() + "\n";
            File.AppendAllText(nomeFile, temp);
        }
        public void salva(Movimenti lista)
        {
            string temp = "";
            for (int i = 0; i < lista.nEl(); i++)
                temp += lista.getMovimento(i).toString() + "\n";
            File.WriteAllText(nomeFile, temp);
        }
    }
}
