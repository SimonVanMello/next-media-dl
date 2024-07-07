# Next.js Media Downloader
This project aims to provide a simple way to download mp3/mp4 files from various providers.

## Running the project
This application can easily be hosted anywhere using Docker. The docker-compose file is meant to be used with a [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/), you just need to specify your tunnel's token in the `.env` file.

If you just want to run the development version, you can use the `npm run dev` command.
> Don't forget to install the packages with the `npm i` command.

You can also run the application without cloning the repo by running the following command:
```bash
docker run -d -p 3000:3000 --name next-media-dl -e NODE_ENV=production simonvanmello/next-media-dl:latest
```
> In this case, no Cloudflare Tunnel is used.

## Configure Cloudflare Tunnel
- Go the the [Cloudflare Dashboard](https://dash.cloudflare.com/)
- Click on the `Zero Trust` tab
- Expend the `Networks` tab by clicking on the down arrow
- Go to the `Tunnels` tab
- Click on `Create a tunnel`
- Select `Cloudflared` then click on the `Next` button
- Name your tunnel then click on the `Save tunnel` button
- Get your tunnel's token and paste it in the `.env` file
- Click on the `Next` button
- Add a public hostname for you app
- In the service section, enter the following values:
  - Type: HTTP
  - Url: nextjs:3000
- Click on the `Save tunnel` button

## Roadmap
- [x] Add support for Youtube videos
- [x] Docker support
- [ ] Handle Youtube playlists downloads
- [ ] Add support for Soundcloud
- [ ] Create a settings menu
- [ ] Add support for Spotify (songs and playlists)