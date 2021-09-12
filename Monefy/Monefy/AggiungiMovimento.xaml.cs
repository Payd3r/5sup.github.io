using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Monefy
{
    public partial class AggiungiMovimento : Window
    {
        Gestione gestione;
        string categoria = "select ->";
        Stopwatch stopwatch = new Stopwatch();
        Movimenti movimenti;
        public AggiungiMovimento()
        {
            InitializeComponent();
        }
        public AggiungiMovimento(string a, Gestione b, Movimenti c)
        {
            InitializeComponent();
            gestione = b;
            if (a == "aggiungi")
                segno.Content = "+";
            else
                segno.Content = "-";
            Thread tempo = new Thread(Timer);
            tempo.Start();
            movimenti = c;
        }
        //timer
        private void Timer()
        {
            while (stopwatch.ElapsedMilliseconds < 300000)
            {
                aggiornaSchermata();
                Thread.Sleep(1000);
            }
        }
        private void aggiornaSchermata()
        {
            if (!CheckAccess())
                Dispatcher.Invoke(() => { aggiornaSchermata(); });
            else
                aggiorna();
        }
        private void aggiorna() { recap.Content = importo.Text.ToString() + "€ | " + categoria + " | " + DateTime.Now.ToString(); }
        private void btnConferma_Click(object sender, RoutedEventArgs e)
        {
            Movimento mov = new Movimento();
            if (segno.Content == "-")
                if (movimenti.saldo - Convert.ToInt32(importo.Text) < 0)
                {
                    MessageBox.Show("contro in negativo!");
                }
            if (Convert.ToInt32(importo.Text) > 0 || categoria != "select ->")
            {
                if (segno.Content == "+")
                    mov.tipo = true;
                else
                    mov.tipo = false;
                mov.importo = Convert.ToInt32(importo.Text);
                mov.categoria = categoria;
                if (nota.Text != "")
                    mov.nota = nota.Text;
                mov.orario = DateTime.Now;
                mov.percorso = percorso.Content.ToString();
                salvaFoto(percorso.Content.ToString());
                movimenti.setMovimento(mov);
                gestione.salva(movimenti);
                MessageBox.Show("movimento salvato correttamente!");
                MainWindow a = new MainWindow();
                a.Show();
                this.Close();
            }
            else
                MessageBox.Show("errore nell'inserimento\no\ncampi mancanti!");
        }
        private void salvaFoto(string a)
        {
            string[] pathArr = a.Split('\\');
            string fileName = pathArr.Last().ToString();
            System.IO.File.Copy(a, AppDomain.CurrentDomain.BaseDirectory + "\\scontrini\\" + fileName);
        }

        private void btnAbbigliamento_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Abbigliamento";
            aggiorna();
        }

        private void btnAlimentari_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Alimentari";
            aggiorna();
        }

        private void btnAnimali_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Animali";
            aggiorna();
        }

        private void btnAuto_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Auto";
            aggiorna();
        }

        private void btnBollette_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Bollette";
            aggiorna();
        }

        private void btnCasa_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Casa";
            aggiorna();
        }

        private void btnComunicazioni_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Comunicazioni";
            aggiorna();
        }

        private void btnIgene_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Igene";
            aggiorna();
        }

        private void btnIntrattenimento_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Intrattenimento";
            aggiorna();
        }

        private void btnRegali_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Regali";
            aggiorna();
        }

        private void btnRistorante_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Ristorante";
            aggiorna();
        }

        private void btnSalute_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Salute";
            aggiorna();
        }

        private void btnSport_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Sport";
            aggiorna();
        }

        private void btnTaxi_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Taxi";
            aggiorna();
        }

        private void btnTrasporti_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Trasporti";
            aggiorna();
        }

        private void btnDepositi_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Depositi";
            aggiorna();
        }

        private void btnRisparmi_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Risparmi";
            aggiorna();
        }

        private void btnStipendio_Click(object sender, RoutedEventArgs e)
        {
            categoria = "Stipendio";
            aggiorna();
        }


        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            OpenFileDialog open1 = new OpenFileDialog();
            open1.InitialDirectory = "C:";
            if (open1.ShowDialog() == true)
            {
                string filePatch = open1.FileName;
                MessageBox.Show(open1.FileName, "titolo", MessageBoxButton.OKCancel);
                percorso.Content = filePatch;
            }
        }

        private void Button_Click_2(object sender, RoutedEventArgs e)
        {
            MainWindow a = new MainWindow();
            a.Show();
            this.Close();
        }
    }
}
