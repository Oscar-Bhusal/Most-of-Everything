#include <stdio.h>

int main()
{
    int s, hour, min, sec, rems;
    printf("Enter the number of seconds: ");
    scanf("%d", &s);

    hour = s / 3600;
    rems = s % 3600;

    min = rems / 60;
    sec = rems % 60;

    printf("%d seconds is equal to %d hours, %d minutes, and %d seconds.\n", s, hour, min, sec);

    return 0;
}
