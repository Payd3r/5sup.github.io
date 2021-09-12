using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Monefy
{
    public class Movimenti
    {
        public int positivo { get; set; }
        public int negativo { get; set; }
        public int saldo { get; set; }

        public List<Movimento> movimenti;
        public Movimenti()
        {
            this.movimenti = new List<Movimento>();
            positivo = 0;
            negativo = 0;
            saldo = 0;
        }
        public void setMovimento(Movimento p) => movimenti.Add(p);
        public int nEl() { return movimenti.Count; }
        public Movimento getMovimento(int pos) { return movimenti[pos]; }
        public List<Movimento> getLista() { return movimenti; }
        public void calcolca()
        {
            for (int i = 0; i < this.nEl(); i++)
            {
                if (this.getMovimento(i).tipo)
                {
                    positivo += this.getMovimento(i).importo;
                    saldo += this.getMovimento(i).importo;
                }
                else
                {
                    negativo += this.getMovimento(i).importo;
                    saldo -= this.getMovimento(i).importo;
                }
            }
        }
        public void sortData()
        {
            Movimento temp = new Movimento();
            for (int j = 0; j < this.nEl() - 1; j++)
                for (int i = 0; i < this.nEl() - 1; i++)
                    if (this.getMovimento(i).orario.CompareTo(this.getMovimento(i + 1).orario) > 0)
                    {
                        temp = movimenti[i];
                        movimenti[i] = movimenti[i + 1];
                        movimenti[i + 1] = temp;
                    }
        }
        public void sortCategoria()
        {
            Movimento temp = new Movimento();
            for (int j = 0; j < this.nEl() - 1; j++)
                for (int i = 0; i < this.nEl() - 1; i++)
                    if (String.Compare(this.getMovimento(i).categoria, this.getMovimento(i + 1).categoria) > 0)
                    {
                        temp = movimenti[i];
                        movimenti[i] = movimenti[i + 1];
                        movimenti[i + 1] = temp;
                    }
        }
    }
}
