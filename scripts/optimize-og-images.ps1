# Script para optimizar imágenes OG
# - Elimina marca de agua Gemini
# - Redimensiona a 1200x630px
# - Convierte a JPG optimizado

Add-Type -AssemblyName System.Drawing

$inputFolder = "C:\Users\crist\Desktop\Claude_Webs\almamedia-nextjs\public\og-images"
$outputFolder = "C:\Users\crist\Desktop\Claude_Webs\almamedia-nextjs\public\og-images-optimized"

if (-not (Test-Path $outputFolder)) {
    New-Item -ItemType Directory -Path $outputFolder | Out-Null
}

$images = Get-ChildItem -Path $inputFolder -Filter "*.png"
Write-Host "Procesando $($images.Count) imagenes..." -ForegroundColor Cyan

foreach ($image in $images) {
    Write-Host "Procesando: $($image.Name)" -ForegroundColor Yellow

    $originalImage = [System.Drawing.Image]::FromFile($image.FullName)
    Write-Host "  Original: $($originalImage.Width)x$($originalImage.Height)px"

    # Recortar marca de agua (quitar últimos 100px de altura)
    $cropHeight = $originalImage.Height - 100
    $cropRect = New-Object System.Drawing.Rectangle(0, 0, $originalImage.Width, $cropHeight)
    $croppedBitmap = New-Object System.Drawing.Bitmap($originalImage.Width, $cropHeight)
    $g1 = [System.Drawing.Graphics]::FromImage($croppedBitmap)
    $g1.DrawImage($originalImage, 0, 0, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
    $g1.Dispose()

    # Redimensionar a 1200x630px
    $resizedBitmap = New-Object System.Drawing.Bitmap(1200, 630)
    $g2 = [System.Drawing.Graphics]::FromImage($resizedBitmap)
    $g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g2.DrawImage($croppedBitmap, 0, 0, 1200, 630)
    $g2.Dispose()

    # Guardar como JPG
    $outputFileName = [System.IO.Path]::ChangeExtension($image.Name, "jpg")
    $outputPath = Join-Path $outputFolder $outputFileName

    $jpegEncoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85L)

    $resizedBitmap.Save($outputPath, $jpegEncoder, $encoderParams)

    $croppedBitmap.Dispose()
    $resizedBitmap.Dispose()
    $originalImage.Dispose()

    $finalSize = (Get-Item $outputPath).Length / 1KB
    Write-Host "  OK: 1200x630px, $([Math]::Round($finalSize, 2))KB" -ForegroundColor Green
}

Write-Host "`nCompleto! Imagenes en: $outputFolder" -ForegroundColor Green
