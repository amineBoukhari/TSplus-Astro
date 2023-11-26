---
slug : 2023-01-20-how-to-reset-rdp-session-remotely
tags: ['remote-access']
draft : false 
imageLink : How-to-Reset-RDP-Session-Remotely-1024x576.png
title: "How to Reset RDP Session Remotely"
date: "2023-01-20"

---

[![Article title "How to Reset RDP Session Remotely", TSplus logo and link, with background in the shape of a laptop.](./images/How-to-Reset-RDP-Session-Remotely-1024x576.png)](https://tsplus.net/remote-access/)

When too many RDP sessions remain open, whatever the reasons, sys admins are likely to need to end some of these. Here is how to end, reset, kill etc. an RDP session remotely. Though, bear in mind before setting out that force closing a session, even idle, could cause a loss of data. Due to this, it always good to be able to warn users first, so they can take action. To wrap up, find out how you can modify network settings with [TSplus](https://tsplus.net/remote-access/) and simplify this situation.

## Why Would You Want to End RDP Sessions Remotely?

Mainly, RDP sessions should be terminated only if they are lagging or malfunctioning in some way. Indeed, terminating a session surreptitiously will most likely cause its user to loose data. That said, here are some prime reasons to not leave RDP sessions open without purpose.

- Quota Exceeded

There are generally only a set amount of live or open RDP connections possible regardless of set-up. If that quota is entirely used up, the server will stop any new connections.

- Security

Open inactive RDP connections are an inroad for security breaches, whether in-house or external. However strong cyber-security may be, there are too many potential threats to take any chances with security.

- Bandwidth

Open connections take up server space and bandwidth at various points. Therefore, leaving them inactive can quickly add up to pointless clogging up of resources. Simply closing the window does not automatically end a session. This highlights a need for users to be informed and settings adjusted in order to avoid this.

- Energy Saving

Consequently, hosting open sessions ends up using memory and energy, both when they are active and inactive. Even the smallest savings of memory or bandwidth usage will add up. Together they will be very welcome seeing energy costs of all kinds have steeply risen, snowballing on prices everywhere.

- Security

Security is important enough to get this second mention. It touches on so many areas of IT and networks, whether local or remote, that it cannot be ignored. Data will be all the more secure, the lesser open connections exist. Especially if those connections are open from roaming devices or outside the corporate network.

## How to Find and End RDP Sessions Remotely

The key is command lines, so you will need both the know-how and the administrative privileges to follow these steps. There are two command lines to run, one after the other.

1. Query Session or QWinSta will provide you with the list of sessions on a given server and their status.

Once you have the list, you will need to make a note of each session ID you mean to terminate. You will need that ID in the second step.

The command amounts to something as follows:

C:Windowssystem>qwinsta

or C:Usersservername>qwinsta

or C:Query Session usernameserver:ServerName

where you can search the server, system or user you choose to type. As you guess, according to the information queried, you will pinpoint more or less precise results.

Pick out of the list the user or ID you wanted, any hanging sessions, those that need terminating, etc. and make a note. Indeed, the user and ID need to be inserted in the following step.

10. Session Reset can be used, for instance if you are simply dealing with a problematic session. RWinSta or Logoff will serve to end the targeted session or sessions hosted on that particular server.

Maybe it needs setting aright but you nonetheless dont want to end it. Unlike Logoff which will terminate the session entirely, restarting the session should leave it active. Still, remember users risk losing unsaved data in either of these processes.

To reset the target RDP session run the command with the appropriate ID inserted. It will look something like this:

C:>reset sessionSessionName|SessionIDserver:ServerName

or similar.

## How to Force Kill a Session if the Previous Steps Failed

Generally, the above steps will have ended any session adequately. As nothing is completely infallible, here is one more route. You can still run the command to kill the precise task related to the session. For that, start by killing its logon process, then you can act on the actual process ID.

## Basic Prevention and User Awareness

Where lagging and hanging sessions are concerned, there is little you can do. But regarding abandoned and idle sessions, you can make sure users know a couple of basics. Inform everyone that simply closing the window doesnt end their session. Add that disconnecting is the step for that. You can then explain the linked saving in server resources. Also, point out how this will enable smother networking for everyone. And if energy saving is an argument, then weigh that in too.

## How to Reset Remote Sessions in TSplus Remote Access

As far as avoiding users exceeding the number of live sessions is concerned, the easiest solution is settings. By adapting remote session rules, you can control conditions and improve the situation. Here are a few examples of actions admins can take in the Remote Access console.

Choose the length of time during which sessions can remain idle in Session Management and Local Group Policies (GPO). There, you can also choose that any disconnected session will be terminated. Set whether a new logon by the same user will generate a new session, close the previous one or capture it. This function is in the user reconnection section of the same GPO.

If you want further detail about those settings, [click here for our FAQ on How to disconnect Idle Sessions](https://support.tsplus.net/support/solutions/articles/44000038643-disconnection-of-idle-sessions). And last but not least, another layer of safeguard is available with TSplus Advanced Security. With this security tool, you can control times when login is allowed with [Working Hours](https://tsplus.net/advanced-security/features/#working-hours).

## To Conclude on How to Reset RDP Session Remotely

Above, you have the steps to act in most Windows and Citrix environments. We have designed our software with care for security and fluidity. Indeed, we like software to be secure, efficient, user-friendly and affordable. Please visit our [website](https://tsplus.net/remote-access/) to try out Remote Access for 15 days for free, and any other TSplus product.
