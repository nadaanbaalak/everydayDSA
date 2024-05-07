#include <iostream>

using namespace std;

int main()
{
    int n;
    cout << "Enter the value of array size : " << endl;
    cin >> n;
    int inputArray[n];
    int inputElement;
    for (int i = 0; i < n; i++)
    {
        cin >> inputElement;
        inputArray[i] = inputElement;
    }

    int psArray[n];
    psArray[0] = inputArray[0];
    for (int i = 1; i < n; i++)
    {
        psArray[i] = psArray[i - 1] + inputArray[i];
    }
    int q;
    cin >> q;
    int l, r;
    for (int i = 0; i < q; i++)
    {
        cin >> l >> r;
        cout << ((l == 0) ? psArray[r] : (psArray[r] - psArray[l - 1])) << endl;
    }
    return 0;
}