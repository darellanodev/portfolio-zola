+++
title = "Laya AI decisions in Python."
date = 2026-09-27
updated = 2026-09-27
description = "I try Laya, a free and open source AI tool to classify texts and make decisions between the options I define, installed locally and called from a simple Python script."

[taxonomies]
tags = ["AI", "Tools", "Python", "YouTube"]

[extra]
footnote_backlinks = true
+++

Hello developer 👋! In this post I try [Laya](https://github.com/NandhaKishorM/laya), a free and open source AI tool to classify texts and make decisions between a set of options I define. I install it locally and use it from a very simple Python script.

![laya-decisions](./laya-decisions.png)

## What is Laya

The idea is simple: you give Laya a text, a question, and a list of options, and it calculates which option fits best. It is the same principle behind a home assistant that understands "it is too hot in the living room", or a support inbox that routes a message to the right department.

Here are some examples of what it does:

Text: "It is too hot in the living room."

Options:

- turn_on_light
- lower_blind
- turn_on_ac
- turn_off_tv

→ turn_on_ac

Text: "I have added support for exporting the results to JSON."

Options:

- fix
- feat
- refactor
- docs

→ feat

Text: "Could you send me the March invoice again?"

Options:

- sales
- billing
- support
- hr

→ billing

The [project page on GitHub](https://github.com/NandhaKishorM/laya) already has more than 22k stars, which is not bad at all.

## Setting up the project

For this practice I am going to use Laya from a very simple Python script, so these are the steps:

1. Create a directory for the project (I open it in Zed).
2. Create and activate a virtual environment with Python 3.12.
3. Install Laya.
4. Create `main.py` and run it.
5. See the result.

First, let us check which Python I have:

```bash
python --version
```

It tells me I have Python 3.14.0. Since this version is very recent, it may cause problems with some Laya dependencies, so I am going to install Python 3.12 with `uv`:

```bash
uv python install 3.12
```

Now I create the directory and set up the virtual environment there:

```bash
mkdir laya-test
cd laya-test
uv venv --python 3.12
```

I activate the environment (in a Git Bash terminal):

```bash
source .venv/Scripts/activate
```

And I install Laya:

```bash
uv pip install laya
```

To check that everything works:

```bash
laya --help
```

## Writing the script

I create a `main.py` file in that directory, with Zed or any other editor such as VSCode, and paste this code:

```python
from laya import Router

router = Router()

state = "They charged me twice for the same order."

questions = {
    "department": {
        "type": "choice",
        "instructions": "Which department should handle this message?",
        "criteria": {
            "billing": "invoices, payments, charges, refunds",
            "technical": "errors, technical failures, application problems",
            "sales": "sales, prices, contracts"
        }
    }
}

result = router.predict(state, questions)

print(result["answers"]["department"]["choice"])
```

Let us break this code down:

I import `Router`. `Router` is the piece of Laya that decides which model to use and runs the prediction.

`state` is simply the state or information that Laya has to analyze. In our case: "They charged me twice for the same order." It could also be a full email, a conversation, or a description of a problem.

In `questions = {` a Python dictionary starts. Inside it, I create a question called "department".

`choice` means: "choose one of the options I am going to give you."

In `instructions` I write the question. In `criteria` I indicate the possible answers and what they mean. For example, `"billing": "invoices, payments, charges, refunds"` means: if the message talks about invoices, payments, charges or refunds, then the answer is "billing".

With `result = router.predict(state, questions)` we ask Laya to make the decision, taking into account the state and the questions with their criteria. Finally, we print the decision with `print(result["answers"]["department"]["choice"])`.

## Running the script

Now I run the file:

```bash
python main.py
```

It works. Laya answers: `billing`.

In other words, it has interpreted "They charged me twice for the same order." as a billing issue.

We have just tested the basic flow from Python:

text → questions + criteria → Laya → decision

The interesting part is that you define the categories and their criteria, while Laya makes the decision. Laya does not have "billing", "technical" and "sales" categories programmed in advance: we are the ones providing them in `questions`.

## Cleaning up

To remove everything that was installed, run this in the project directory:

```bash
deactivate
```

And then delete the directory.

Finally, remove the models that Laya downloaded:

```bash
Remove-Item -Recurse -Force "$env:USERPROFILE\.cache\huggingface"
```

## Conclusion

Laya turns a text into a decision between the options you define, and it does so with a handful of lines of Python. The categories and their criteria are yours, so the same tool works for home automation, commit types, or routing customer messages to a department. And it is free and open source.

## Performance on my local machine

Before wrapping up, I wanted to know how fast this runs locally, so I ran `python main.py` three times in a row without changing anything.

These are the specs of the machine:

- Intel i7 8750H 2.2 GHz
- Nvidia GeForce GTX 1060 (6 Gb)
- RAM 8 GB 2667 MHz

The sequence is always the same:

1. A short pause.
2. `Fetching 5 files 100%`.
3. Another short pause.
4. The decision, and back to the prompt.

Timing the three runs, the total is about 11-12 seconds. From `Fetching 5 files 100%` to the decision, about 6 seconds.

While it runs, in the Task Manager the CPU goes up, the WiFi activity goes up as well (I assume that is the `Fetching 5 files` part), and the RAM, which was at 49%, goes up to 70% for a moment, about two seconds, and then drops back to 49%. The graphics card does not move, so in this case it is not being used.

I did this test without touching any setting, so there is probably room to tune it, but these are the real numbers of a normal local run.

## Video

In the following video you can see the complete process (Spanish audio).

{{ youtube_embed(video_id="EUgmuBQkZic") }}
