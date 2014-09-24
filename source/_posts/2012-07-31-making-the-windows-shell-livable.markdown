---
layout: post
title: "Making the Windows Shell Livable"
date: 2012-07-31 16:44
comments: true
categories: [windows, powershell, git, console2]
---
Back when I last "did" Windows development, .Net didn't exist and the Windows CMD prompt was 
one of the first things I replaced (with Cygwin). Unfortunately, last time I helped someone with a Windows
machine the Cygwin install didn't go well - it seemed to be mired in the past, was slow, and the 
git version included did not work for some reason with the repos we needed to use.

Fast forward to the last couple of weeks. I'm in the process of learning C# and .Net to help build
a new framework with a team and I'm running Windows 7 in a VM. So I'm coming to Windows fresh after a break
of almost 8 years. The good news so far has been than C# strikes me much better than Java did (when I last 
used it) and that the .Net environment is pretty easy to get learning.  Some DLL hell still exists (which
I ran into using the ZeroMQ NuGet libraries), but for the most part it has been fairly pleasant. Unfortunately,
the old Windows CMD prompt is unchanged from all those years ago. Despair sets in.

Then I learned about [PowerShell](http://technet.microsoft.com/en-us/library/bb978526.aspx). After giving 
it a whirl and learning a thing or two, I've finally got a very usable shell configuration for Windows 
development that doesn't make me weep every time I have to use it. Here's how I have it configured.

On my VM, PowerShell comes pre-installed, you may need to download it 
depending on your version of Windows.

## Console2

First I installed [Console2](http://sourceforge.net/projects/console/). Console is a Windows GUI which wraps 
the shell of your choice and adds: multiple tabs, text editor-like text selection, different background types, alpha and color-key transparency, configurable font, different window styles, hot-key mapping, etc.  This step isn't strictly necessary
but I like having a more responsive window for my shell and I use tabs often in iTerm on the mac.

I configure Console to use PowerShell by starting Console, selecting the Edit->Settings menu, then selecting the 
PowerShell exe in the "Shell" chooser which on my machine is located at: "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe".

## Git

A lot of Windows developers seem GUI bound which is an unfair self-limitation to impose. I install the git version from 
the primary [Git](http://git-scm.com) site. [Download](http://git-scm.com/download/win)

When installing, Git offers you the choice to install git for Git Bash only or for general use. I chose the general 
purpose case.

## Configuring Git 

Note to self - you need to configure git to use .ssh keys in order for things to work correctly with remote repos. I'll 
post something on this later.

## Installing Posh-Git into PowerShell

Once you have git installed and configured, to get the most from Powershell, I recommend installing posh-git.

First set the security for your PowerShell instance. Run PowerShell as Administrator and type:

``` powershell 
Set-ExecutionPolicy RemoteSigned -Confirm
```

Make sure git can be run from your shell. If not, add it to your user's PATH.

Type the following commands to install PsGet and Posh-Git:

``` powershell
(new-object Net.WebClient).DownloadString("http://psget.net/GetPsGet.ps1") | iex
install-module posh-git
```

To make it available at all times, install it in the PowerShell profile script. On my machine, this is 
located in my Documents folder: WindowsPowerShell\Microsoft.PowerShell_profile.ps1.

``` powershell Microsoft.PowerShell_profile.ps1
Push-Location (Split-Path -Path $MyInvocation.MyCommand.Definition -Parent)

# Load posh-git module from current directory
# Import-Module .\posh-git

# If module is installed in a default location ($env:PSModulePath),
# use this instead (see about_Modules for more information):
Import-Module posh-git


# Set up a simple prompt, adding the git prompt parts inside git repos
function prompt {
    $realLASTEXITCODE = $LASTEXITCODE

    # Reset color, which can be messed up by Enable-GitColors
    $Host.UI.RawUI.ForegroundColor = $GitPromptSettings.DefaultForegroundColor

    Write-Host($pwd) -nonewline

    Write-VcsStatus

    $global:LASTEXITCODE = $realLASTEXITCODE
    return "> "
}

Enable-GitColors

Pop-Location
```

Exit out of Console/PowerShell and the next time you start up, you'll see extra functionality for Git while in directories that 
are Git repositories.

You can now use tab completion to complete both git commands and to fill in branch or remote names in addition to file names.

When you type "git status", you will see color highlighting of files that helps understanding what is staged versus what
isn't yet.

Have fun.  Let me know if you have any tips for PowerShell that I should pick up.

