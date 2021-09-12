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
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Monefy
{
    /// <summary>
    /// Logica di interazione per MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        Stopwatch stopwatch = new Stopwatch();
        Gestione gestione = new Gestione(AppDomain.CurrentDomain.BaseDirectory + "movimenti.txt");
        Movimenti movimenti;
        Thread tempo;
        public MainWindow()
        {
            InitializeComponent();
            //timer
            tempo = new Thread(Timer);
            tempo.Start();
            movimenti = gestione.leggi();
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
            {
                data.Content = DateTime.Now.ToString("dddd, dd MMMM yyyy");
                movimenti = gestione.leggi();
                movimenti.calcolca();
                Piu.Content = "+" + movimenti.positivo;
                Meno.Content = "-" + movimenti.negativo;
                saldo.Text = movimenti.saldo.ToString();
            }
        }

        private void btnPiu_Click(object sender, RoutedEventArgs e)
        {
            AggiungiMovimento a = new AggiungiMovimento("aggiungi", gestione, movimenti);
            a.Show();
            this.Hide();
        }

        private void btnMeno_Click(object sender, RoutedEventArgs e)
        {
            AggiungiMovimento a = new AggiungiMovimento("rimuovi", gestione, movimenti);
            a.Show();
            this.Hide();
        }

        private void visCategorie_Click(object sender, RoutedEventArgs e)
        {
            Visualizza a = new Visualizza(movimenti, "Categorie");
            a.Show();
            this.Hide();
        }

        private void VisRecenti_Click(object sender, RoutedEventArgs e)
        {
            Visualizza a = new Visualizza(movimenti, "Recenti");
            a.Show();
            this.Hide();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            tempo.Abort();
            this.Close();
        }
    }
}
