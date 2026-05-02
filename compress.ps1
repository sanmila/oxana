$videos = Get-ChildItem -Path "assets/videos" -Filter "*.MP4" | Where-Object { $_.Name -notmatch "^compressed_" }

foreach ($video in $videos) {
    $output = "assets/videos/compressed_$($video.Name)"
    $output = $output -replace "\.MP4$", ".mp4"
    if (-not (Test-Path $output)) {
        Write-Host "Compressing $($video.Name)..."
        ffmpeg -v error -stats -i $video.FullName -vcodec libx264 -crf 24 -preset fast -vf "scale=-2:1280" -acodec aac -b:a 128k -y $output
    }
}
Write-Host "Done!"
