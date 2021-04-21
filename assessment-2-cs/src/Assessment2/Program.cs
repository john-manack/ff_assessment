// Pseudo code for contrived linked list:
// 55-->82-->23-->11-->36-->42-->29-->77-->98-->61-->88

using System;

namespace Assessment2
{
    internal class Node {
        internal int data;
        internal Node next;
        public Node(int d) {
            data = d;
            next = null;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
