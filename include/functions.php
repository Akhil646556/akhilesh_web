<?php
require_once 'connection.php';

class source {
    private $db;

    public function __construct() {
        global $conn;
        $this->db = $conn;
    }

    private function isConnected() {
        return !is_null($this->db);
    }

    // Standard method to fetch rows
    public function getRows($sql) {
        if (!$this->isConnected()) return [];
        try {
            $stmt = $this->db->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $e) {
            return [];
        }
    }

    // Standard method to insert data
    public function insert($table, $data) {
        if (!$this->isConnected()) return false;
        $fields = implode(", ", array_keys($data));
        $placeholders = ":" . implode(", :", array_keys($data));
        $sql = "INSERT INTO $table ($fields) VALUES ($placeholders)";
        
        try {
            $stmt = $this->db->prepare($sql);
            $stmt->execute($data);
            return $this->db->lastInsertId();
        } catch(PDOException $e) {
            return false;
        }
    }

    // Standard method to update data
    public function update($table, $data, $where_field, $where_value) {
        if (!$this->isConnected()) return false;
        $update_fields = "";
        foreach($data as $key => $value) {
            $update_fields .= "$key = :$key, ";
        }
        $update_fields = rtrim($update_fields, ", ");
        $sql = "UPDATE $table SET $update_fields WHERE $where_field = :where_val";
        
        try {
            $data['where_val'] = $where_value;
            $stmt = $this->db->prepare($sql);
            $stmt->execute($data);
            return true;
        } catch(PDOException $e) {
            return false;
        }
    }
}
?>
