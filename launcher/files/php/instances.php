<?php
$instance['Modpack'] = array_merge($instance['Modpack'], array(
    "loadder" => array(
        "minecraft_version" => "1.21.1",
        "loadder_type" => "neoforge",
        "loadder_version" => "21.1.174"
    ),
    "verify" => true,
    "ignored" => array(
        'config',
        'essential',
        'logs',
        'saves',
        'schematics',
        'screenshots',
        'shaderpacks',
        'W-OVERFLOW',
        'options.txt',
        'optionsof.txt'
    ),
    "whitelist" => array(),
    "whitelistActive" => false,
    "status" => array(
        "nameServer" => "Server",
        "ip" => "mcserver.minehost.pro",
        "port" => 25707
    )
));

$instance['Vanilla'] = array_merge($instance['Vanilla'], array(
    "loadder" => array(
        "minecraft_version" => "latest_release",
        "loadder_type" => "none",
        "loadder_version" => "none"
    ),
    "verify" => false,
    "ignored" => array(),
    "whitelist" => array(
        'ImSanty'
    ),
    "whitelistActive" => true,
    "status" => array(
        "nameServer" => "Server",
        "ip" => "mcserver.minehost.pro",
        "port" => 25707
    )
));

$instance['Snapshot'] = array_merge($instance['Snapshot'], array(
    "loadder" => array(
        "minecraft_version" => "latest_snapshot",
        "loadder_type" => "none",
        "loadder_version" => "none"
    ),
    "verify" => false,
    "ignored" => array(),
    "whitelist" => array(
        'ImSanty'
    ),
    "whitelistActive" => true,
    "status" => array(
        "nameServer" => "Server",
        "ip" => "mcserver.minehost.pro",
        "port" => 25707
    )
));
?>