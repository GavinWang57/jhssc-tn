$ErrorActionPreference = "Stop"

$destDir = Join-Path (Split-Path $PSScriptRoot -Parent) "src\assets\images\OtherResources"
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

$groups = @(
    @{ Slug = "home-economics"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/1.家政職群-1.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/1.家政職群-2.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/1.家政職群-3.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/1.家政職群-4.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/1.家政職群-5.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/1.家政職群-6.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/1.家政職群-7.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/1.家政職群-8.jpg"
    ) },
    @{ Slug = "electronics-electrical"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/2.電子與電機職群-1.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/2.電子與電機職群-2.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/2.電子與電機職群-3.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/2.電子與電機職群-4.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/2.電子與電機職群-5.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/2.電子與電機職群-6.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/2.電子與電機職群-7.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/2.電子與電機職群-8.jpg"
    ) },
    @{ Slug = "arts"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/3.藝術職群-1.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/3.藝術職群-2.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/3.藝術職群-3.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/3.藝術職群-4.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/3.藝術職群-5.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/3.藝術職群-6.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/3.藝術職群-7.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/3.藝術職群-8.jpg"
    ) },
    @{ Slug = "health-care"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/4.醫護職群-1-scaled.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/4.醫護職群-2-scaled.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/4.醫護職群-3-scaled.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/4.醫護職群-4-scaled.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/4.醫護職群-5-scaled.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/4.醫護職群-6-scaled.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/4.醫護職群-7-scaled.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2025/05/4.醫護職群-8-scaled.jpg"
    ) },
    @{ Slug = "power-mechanical"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_動力機械-01.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_動力機械-02.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_動力機械-03.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_動力機械-04.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_動力機械-05.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_動力機械-06.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_動力機械-07.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_動力機械-08.png"
    ) },
    @{ Slug = "business-management"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_商管-01.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_商管-02.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_商管-03.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_商管-04.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_商管-05.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_商管-06.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_商管-07.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_商管-08.png"
    ) },
    @{ Slug = "chemical-engineering"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_化工-01.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_化工-02.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_化工-03.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_化工-04.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_化工-05.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_化工-06.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_化工-07.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_化工-08.png"
    ) },
    @{ Slug = "mechanical"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_機械-01.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_機械-02.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_機械-03.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_機械-04.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_機械-05.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_機械-06.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_機械-07.png",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2022/06/漫畫_機械-08.png"
    ) },
    @{ Slug = "maritime"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_海事-01.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_海事-02.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_海事-03.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_海事-04.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_海事-05.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_海事-06.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_海事-07.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_海事-08.jpg"
    ) },
    @{ Slug = "fisheries"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_水產-01.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_水產-02.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_水產-03.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_水產-04.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_水產-05.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_水產-06.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_水產-07.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_水產-08.jpg"
    ) },
    @{ Slug = "foreign-language"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_外語-01.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_外語-02.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_外語-03.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_外語-04.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_外語-05.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_外語-06.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_外語-07.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_外語-08.jpg"
    ) },
    @{ Slug = "hospitality-tourism"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_餐旅-01.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_餐旅-02.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_餐旅-03.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_餐旅-04.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_餐旅-05.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_餐旅-06.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_餐旅-07.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2023/05/漫畫_餐旅-08.jpg"
    ) },
    @{ Slug = "agriculture"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_農業-01.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_農業-02.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_農業-03.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_農業-04.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_農業-05.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_農業-06.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_農業-07.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_農業-08.jpg"
    ) },
    @{ Slug = "design"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_設計-01.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_設計-02.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_設計-03.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_設計-04.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_設計-05.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_設計-06.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_設計-07.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_設計-08.jpg"
    ) },
    @{ Slug = "food"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_食品-01.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_食品-02.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_食品-03.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_食品-04.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_食品-05.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_食品-06.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_食品-07.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_食品-08.jpg"
    ) },
    @{ Slug = "civil-construction"; Urls = @(
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_土木建築-01.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_土木建築-02.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_土木建築-03.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_土木建築-04.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_土木建築-05.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_土木建築-06.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_土木建築-07.jpg",
        "https://test.camping.org.tw/wordpress/hvac/wp-content/uploads/2024/05/漫畫_土木建築-08.jpg"
    ) }
)

$headers = @{ "User-Agent" = "Mozilla/5.0" }
$mapping = @{}

foreach ($group in $groups) {
    $slug = $group.Slug
    $urls = $group.Urls
    $localNames = @()
    for ($i = 0; $i -lt $urls.Count; $i++) {
        $url = $urls[$i]
        $ext = [System.IO.Path]::GetExtension($url)
        $num = "{0:D2}" -f ($i + 1)
        $fileName = "$slug-$num$ext"
        $outPath = Join-Path $destDir $fileName
        Invoke-WebRequest -Uri $url -OutFile $outPath -Headers $headers
        $localNames += $fileName
        Write-Host "Downloaded $fileName"
    }
    $mapping[$slug] = $localNames
}

Write-Host "All downloads complete."

