# XARON Notify
Just another notification plugin for FiveM.



<h1>Documentation</h1>

The first thing you need to do is to download the resource and start it in your server.cfg.

<pre>ensure xaron_notify</pre>

An example usage;

```lua
exports["xaron_notify"]:XARON.sendNotify({
  ['type'] = "show",
  ['title'] = "MY TITLE",
  ['identifier'] = "my_title_identifier",
  ['text'] = "Hello world",
  ['cooldown'] = 5000,
})
```

That will look something like this.


![demo](https://img001.prntscr.com/file/img001/2u0hex78QuO78d7GfcXwyw.png)

Also in these notifications are you able to use the HTML codes.
