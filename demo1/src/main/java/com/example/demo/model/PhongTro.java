package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "phongtro")
public class PhongTro {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int soPhong;
	@Column(name = "dientich")
	private String dientich;
	@Column(name = "giaphong")
	private String giaPhong;
	@Column(name = "mota")
	private String mota;
	@Column(name = "giathue")
	private String giaThue;
	@Column(name = "trangthai")
	private int trangThai;
	
	public PhongTro() {
	}
	
	public PhongTro(int soPhong, String dientich, String giaPhong, String mota, String giaThue, int trangThai) {
		this.soPhong = soPhong;
		this.dientich = dientich;
		this.giaPhong = giaPhong;
		this.mota = mota;
		this.giaThue = giaThue;
		this.trangThai = trangThai;
	}
	public int getSoPhong() {
		return soPhong;
	}
	public void setSoPhong(int soPhong) {
		this.soPhong = soPhong;
	}
	public String getDientich() {
		return dientich;
	}
	public void setDientich(String dientich) {
		this.dientich = dientich;
	}
	public String getGiaPhong() {
		return giaPhong;
	}
	public void setGiaPhong(String giaPhong) {
		this.giaPhong = giaPhong;
	}
	public String getMota() {
		return mota;
	}
	public void setMota(String mota) {
		this.mota = mota;
	}
	public String getGiaThue() {
		return giaThue;
	}
	public void setGiaThue(String giaThue) {
		this.giaThue = giaThue;
	}
	public int getTrangThai() {
		return trangThai;
	}
	public void setTrangThai(int trangThai) {
		this.trangThai = trangThai;
	}
	
	
}
