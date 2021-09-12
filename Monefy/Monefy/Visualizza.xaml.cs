using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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
    public partial class Visualizza : Window
    {
        Movimenti movimenti;
        public Visualizza()
        {
            InitializeComponent();
        }
        public Visualizza(Movimenti a, string b)
        {
            InitializeComponent();
            movimenti = a;
            if (b == "Categorie")
                a.sortCategoria();
            else
                a.sortData();
            grid.IsReadOnly = true;
            grid.ItemsSource = a.getLista();
        }
        private void Button_Click(object sender, RoutedEventArgs e)
        {
            MainWindow a = new MainWindow();
            a.Show();
            this.Close();
        }
    }
}
