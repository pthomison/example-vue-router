package main

import (
	"embed"
	"fmt"
	"io/fs"
	"net/http"

	utils "github.com/pthomison/golang-utils"
	"github.com/spf13/cobra"
)

var (
	//go:embed web/*
	embeddedFiles embed.FS

	address string = "127.0.0.1:5050"

	rootCmd = &cobra.Command{
		Use:   "vue-router",
		Short: "vue-router",
		Run:   run,
	}
)

func main() {
	err := rootCmd.Execute()
	utils.Check(err)
}

func run(cmd *cobra.Command, args []string) {
	fmt.Println("--- vue-router ---")
	Server()
}

func Server() {
	web, err := fs.Sub(embeddedFiles, "web")
	utils.Check(err)

	http.Handle("/", http.FileServer(http.FS(web)))

	http.ListenAndServe(address, nil)
}
