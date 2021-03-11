with import <nixpkgs> {};

let
	customPython = pkgs.python38.buildEnv.override {
		extraLibs = with pkgs.python38Packages; [ pip ];
	};
 in

stdenv.mkDerivation {
	name = "Final-Step-Project";
	buildInputs = [customPython];
	shellHook = ''
		source .venv/bin/activate.fish
		echo "Get to developing... and good luck!" '';
}
