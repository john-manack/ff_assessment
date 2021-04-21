using System;

namespace Assessment1
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args[0] != args[1] && args[0] != args[2] && args[1] != args[2])
            {
                Console.WriteLine("Scalene");
            }
            else if(args[0] == args[1] && args[0] == args[2])
            {
                Console.WriteLine("Equilateral");
            }
            else
            {
                Console.WriteLine("Isosceles");
            }
        }
    }
}
