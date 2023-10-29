# running-plans

Get a tailored running plan

## Data

The data for the Running Plans is taken from Nike Run Club Pace Chart, that can be found in their training plans (e.g.
their [marathon training plan][1]):

[1]: https://www.nike.com/pdf/Nike-Run-Club-Marathon-Training-Plan-Audio-Guided-Runs.pdf

| mile best | 5k best  | avg mile pace | 10k best | avg mile pace | tempo avg mile pace | half marathon best | avg mile pace | marathon best | avg mile pace | recovery day pace |
| --------- | -------- | ------------- | -------- | ------------- | ------------------- | ------------------ | ------------- | ------------- | ------------- | ----------------- |
| 5:00      | 17:05    | 5:30          | 35:45:00 | 5:45          | 6:05                | 1:18:00            | 6:00          | 2:44:00       | 6:15          | 7:00              |
| 5:30      | 18:45    | 6:00          | 39:00:00 | 6:15          | 6:35                | 1:25:00            | 6:30          | 3:00:00       | 6:50          | 7:35              |
| 6:00      | 20:15    | 6:30          | 42:00:00 | 6:45          | 7:05                | 1:35:00            | 7:15          | 3:15:00       | 7:25          | 8:10              |
| 6:30      | 22:00    | 7:05          | 45:45:00 | 7:20          | 7:40                | 1:40:00            | 7:35          | 3:30:00       | 8:00          | 8:45              |
| 7:00      | 23:45    | 7:40          | 49:00:00 | 7:55          | 8:15                | 1:50:00            | 8:20          | 3:45:00       | 8:35          | 9:20              |
| 7:30      | 25:15:00 | 8:05          | 52:30:00 | 8:25          | 8:50                | 1:55:00            | 8:45          | 4:00:00       | 9:10          | 9:55              |
| 8:00      | 27:00:00 | 8:40          | 55:50:00 | 9:00          | 9:25                | 2:05:00            | 9:30          | 4:15:00       | 9:45          | 10:30             |
| 8:30      | 28:30:00 | 9:10          | 59:00:00 | 9:30          | 9:55                | 2:10:00            | 9:55          | 4:30:00       | 10:15         | 11:00             |
| 9:00      | 30:00:00 | 9:40          | 62:30:00 | 10:00         | 10:30               | 2:20:00            | 10:40         | 4:45:00       | 10:50         | 11:35             |
| 9:30      | 31:45:00 | 10:15         | 66:00:00 | 10:35         | 11:00               | 2:25:00            | 11:05         | 5:00:00       | 11:25         | 12:10             |
| 10:00     | 33:00:00 | 10:40         | 69:00:00 | 11:05         | 11:35               | 2:35:00            | 11:45         | 5:15:00       | 12:00         | 12:45             |
| 10:30     | 35:00:00 | 11:15         | 72:00:00 | 11:35         | 12:00               | 2:40:00            | 12:10         | 5:30:00       | 12:35         | 13:20             |
| 11:00     | 36:15:00 | 11:40         | 75:00:00 | 12:00         | 12:35               | 2:50:00            | 12:55         | 5:40:00       | 13:00         | 13:45             |
| 11:30     | 38:00:00 | 12:15         | 78:30:00 | 12:35         | 13:00               | 2:55:00            | 13:15         | 5:50:00       | 13:20         | 14:05             |
| 12:00     | 39:30:00 | 12:40         | 81:30:00 | 13:05         | 13:35               | 3:05:00            | 14:05         | 6:00:00       | 13:45         | 14:30             |

This data is transformed to metric and parsed to be used as the source for the running plans.

## Pre-commit hooks

At repo level create a Python virtual environment and install [`pre-commit`](https://pre-commit.com/#install):

```
pip install pre-commit
```

Then, already having the configuration in `.pre-commit-config.yaml`, install the hooks with:

```
pre-commit install
```

Then, run for all files to make sure things work fine:

```
pre-commit run --all-files
```
