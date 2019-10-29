# Cheap ass identity provider

This is a sample project which shows how you can add a very simple identity provider to wicked, showing a totally custom UI or whatever. This can be nice for legacy integrations or other things, where you have an existing user base, but also want to go for supporting SSO with external identity providers in the future.

## How to run

Install the `wicked-cli` if you haven't done so:

```
$ npm i -g wicked-cli
```

Clone this repository:

```
$ git clone https://github.com/DonMartin76/cheap-ass-idp
...
$ cd cheap-ass-idp
$ npm install
```

### Run the identity provider

```
$ npm start
```

### Start wicked locally

Open a second terminal window, and issue this:

```
$ wicked postgres start
$ wicked box start ./apim-config
```

You should now be able to log in to wicked using the cheap ass identity provider. It does not check anything, but it shows just which interface is needed to get things up and running.
